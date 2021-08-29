module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'criando uma estrutura para um componente',
    prompts: [
      {
        type: 'input',
        name: 'type',
        message: 'Qual o tipo do componente(atoms, molecules, organisms)?'
      },
      {
        type: 'input',
        name: 'name',
        message: 'Qual o nome do componente?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/ui/{{type}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'templates/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/ui/{{type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'templates/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/ui/{{type}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'templates/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/ui/{{type}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  });
};
