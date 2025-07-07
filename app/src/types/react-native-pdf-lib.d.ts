        // declarations.d.ts ou src/types/react-native-pdf-lib.d.ts

        // Esta declaração é crucial para informar ao TypeScript sobre os métodos
        // que ele não está encontrando no pacote @types/react-native-pdf-lib.

        declare module 'react-native-pdf-lib' {
          // Representa uma página individual dentro de um documento PDF.
          // Você pode adicionar propriedades como 'width', 'height' se precisar delas.
          export class PDFPage {
            // Exemplo:
            // width: number;
            // height: number;
          }

          // Representa um documento PDF.
          export class PDFDocument {
            // Métodos estáticos (chamados diretamente na classe PDFDocument)
            // Cria um novo documento PDF vazio.
            static create(): Promise<PDFDocument>;
            // Carrega um documento PDF a partir de um caminho de arquivo ou dados em base64/Uint8Array.
            // A API real do 'react-native-pdf-lib' para 'load' geralmente espera o caminho do arquivo
            // ou os bytes do PDF. No seu código, você está lendo como base64 e passando.
            // Vamos tipar para aceitar string (base64) ou Uint8Array.
            static load(pdfData: string | Uint8Array): Promise<PDFDocument>;

            // Métodos de instância (chamados em um objeto PDFDocument já criado)
            // Retorna um array de índices de todas as páginas no documento.
            getPageIndices(): number[];
            // Copia páginas de um documento PDF de origem para este documento.
            copyPages(sourceDocument: PDFDocument, pageIndices: number[]): Promise<PDFPage[]>;
            // Adiciona um array de objetos PDFPage a este documento.
            addPages(pages: PDFPage[]): void;
            // Obtém o número total de páginas no documento.
            getPageCount(): number;
            // Salva o documento PDF e retorna seus bytes como Uint8Array.
            save(): Promise<Uint8Array>;

            // Se você usar outros métodos da biblioteca, adicione-os aqui também.
            // Ex: getPage(index: number): PDFPage;
            // Ex: removePage(index: number): void;
          }
        }
