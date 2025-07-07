package com.erasmo.foliodoc

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.apache.pdfbox.pdmodel.PDDocument
import java.io.File
import java.io.FileOutputStream
import java.io.IOException

class PdfCompactorModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "PdfCompactorModule"
    }

    @ReactMethod
    fun compactPdfs(pdfUris: ReadableArray, fileName: String, promise: Promise) {
        val outputPdf = PDDocument()
        val context = reactApplicationContext

        try {
            for (i in 0 until pdfUris.size()) {
                val uriString = pdfUris.getString(i)
                
                // Adicione esta verificação de nulidade
                if (uriString == null) {
                    promise.reject("INVALID_URI", "URI do PDF é nula no índice $i")
                    return
                }

                val file = File(uriString.replace("file://", "")) // Agora uriString é garantido como não nulo
                if (!file.exists()) {
                    promise.reject("FILE_NOT_FOUND", "Arquivo PDF não encontrado: $uriString")
                    return
                }

                PDDocument.load(file).use { inputPdf ->
                    for (page in inputPdf.pages) {
                        outputPdf.addPage(page)
                    }
                }
            }

            // Salve o PDF combinado em um arquivo temporário no diretório de cache do aplicativo
            val cacheDir = context.cacheDir
            val tempFile = File(cacheDir, "${fileName}_compacted_temp.pdf")
            FileOutputStream(tempFile).use { fos ->
                outputPdf.save(fos)
            }
            outputPdf.close() // Certifique-se de fechar o documento de saída

            promise.resolve(tempFile.absolutePath) // Retorna o caminho absoluto do arquivo temporário
        } catch (e: IOException) {
            promise.reject("PDF_COMPACTION_ERROR", "Erro ao compactar PDFs: ${e.message}", e)
        } catch (e: Exception) {
            promise.reject("UNEXPECTED_ERROR", "Ocorreu um erro inesperado: ${e.message}", e)
        } finally {
            try {
                outputPdf.close() // Garante que o documento de saída seja fechado mesmo em caso de erro
            } catch (e: IOException) {
                // Ignorar erro ao fechar
            }
        }
    }
}
