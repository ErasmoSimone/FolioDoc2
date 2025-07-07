// app/src/theme/colors.ts
export const colors = {
  // Cores primárias
  primary: {
    main: '#3caae9',     // Azul principal usado nos botões "Selecionar Arquivo" e "Juntar"
    light: '#60c1fa',    // Versão mais clara (para estados hover/pressed)
    dark: '#2a80b0',     // Versão mais escura (para states active)
  },

  // Cores de fundo
  background: {
    dark: '#04070d',     // Fundo principal da tela
    card: '#10141a',     // Fundo das boxes de documentos
    elevated: '#2a3240', // Usado no botão "Voltar"
  },

  // Cores de texto
  text: {
    primary: '#ffffff',  // Texto branco principal
    secondary: '#6c7989', // Cor dos números placeholder nas boxes vazias
  },

  // Cores de botões
  button: {
    primary: '#3caae9',  // Botão primário (Juntar, Selecionar Arquivo)
    secondary: '#2a3240', // Botão secundário (Voltar)
    disabled: {
      background: '#2a3240',
      opacity: 0.7
    },
  },

  // Sombras
  shadow: {
    color: '#000000',
    offset: { width: 0, height: 1 },
    opacity: 0.2,
    radius: 2.84
  }
};
