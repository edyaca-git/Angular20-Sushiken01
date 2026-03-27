# GastroRestoCloudWeb 🚀

**GastroRestoCloud** is a professional management solution for the gastronomic industry, designed to provide full control over restaurant operations. This project uses **Angular 20+** with a modern, high-performance tech stack.

---

## 🛠️ Technology Stack

- **Frontend:** [Angular 20+](https://angular.dev/)
- **Styling:** [Tailwind CSS 4.x](https://tailwindcss.com/)
- **Components:** [Angular Material 20+](https://material.angular.io/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [Angular CLI](https://angular.dev/tools/cli)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/GastroRestoCloudWeb.git
   ```
2. Navigate to the project directory:
   ```bash
   cd GastroRestoCloudWeb
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run `npm run start` (or `ng serve`) for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```text
src/
├── app/
│   ├── components/      # Reusable UI components
│   ├── core/            # Services, guards, and interceptors
│   ├── pages/           # Main view components (Auth, Dashboard, etc.)
│   └── shared/          # Shared modules and utilities
├── assets/              # Static files (images, fonts)
└── styles.scss          # Global styles & Tailwind imports
```

## 📄 License

This project is private and proprietary.


```text
Proyecto GastroRestoCloudMob
  * Node 20 LTS → soporte extendido hasta 2026, ideal para CI/CD en Azure DevOps.
    C:\Users\EdyAca>node -v
    v20.19.4

  * npm 10.8.2 → viene incluido con Node 20, y es la versión adecuada para manejar 
                 dependencias Angular.
    C:\Users\EdyAca>npm -v
    10.8.2

  *Angular 20 LTS → estable, con soporte de seguridad y mantenimiento, perfecto para 
                    proyectos grandes en producción.

C:\Users\EdyAca>nvm list

  * 20.19.4 (Currently using 64-bit executable)
    20.10.0
    18.20.8

  1-. cd GastroRestoCloud
  2.- npx @angular/cli@20 new GastroRestoCloudMob 
	(npx → Es una herramienta de npm que ejecuta paquetes sin necesidad de instalarlos globalmente. 
	@angular/cli@20 → Especifica la versión 20.x de Angular CLI 
	new GastroRestoCloudMob → Crea proyecto GastroRestoCloudMob)
 
    C:\Projects\Git\GastroRestoCloud>npx @angular/cli@20 new GastroRestoCloudMob
    Need to install the following packages:
    @angular/cli@20.3.16
    Ok to proceed? (y) y

    √ Which stylesheet format would you like to use? Sass (SCSS)     [ https://sass-lang.com/documentation/syntax#scss
          ]
    √ Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
    √ Do you want to create a 'zoneless' application without zone.js? No
    √ Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai GitHub
    Copilot [ https://code.visualstudio.com/docs/copilot/copilot-customization ]
  3.- cd GastroRestoCloudMob      
      Instalo material.angular (https://material.angular.dev/guide/getting-started)
      asi:
      npx ng add @angular/material@20
      
      C:\Projects\Git\GastroRestoCloud\GastroRestoCloudMob>npx ng add @angular/material@20
      √ Determining Package Manager
        › Using package manager: npm
      √ Loading package information from registry
      √ Confirming installation
      √ Installing package
      √ Choose a prebuilt theme name, or "custom" for a custom theme: Custom
      √ Set up global Angular Material typography styles? Yes
      UPDATE package.json (1214 bytes)
      √ Packages installed successfully.
      UPDATE src/styles.scss (516 bytes)
      UPDATE src/index.html (541 bytes)
  4.- Instalo tailwind desde aqui:
      https://tailwindcss.com/
      a) Seleccionamos [Get started] despues [Framework Guides]
      b) Seleccionamos [Angular] y despues 
      c:\>npm install tailwindcss @tailwindcss/postcss postcss --force        
      4.1.- Configure PostCSS Plugins
            Create a .postcssrc.json file in the root of your project and add 
            {
              "plugins": {
                "@tailwindcss/postcss": {}
              }
            }     
      4.2.- Crear en src/styles/tailwind.css
            agregar en el archivo
            @import "tailwindcss"; 
      4.3.- Edita tu src/styles.scss actual para importar ese archivo al inicio 
            (DESPUES de Angular Material):
            <bloque de codigo de material>
	    @import "./styles/tailwind.css";  // Tailwind al final → sus utilities pueden override Material si usas !important o clases específicas

	    html, body { height: 100%; }
	    body { margin: 0; font-family: Roboto, "Helvetica Neue", sans-serif; }
   5.- npm list --depth=0
       npx ng version
       5.1- pruebo la ejecucion
            npx ng serve -o
   6.- Crear el módulo de layout (layouts/layout.module.ts)
       Este módulo contendrá el layout principal con sidenav + toolbar.
       cd src/app
       ng g module layouts --route layouts --module app.module
       → Esto crea:
       src/app/layouts/layout.module.ts
       src/app/layouts/layout-routing.module.ts (puedes borrarlo si no lo necesitas por ahora)

Proyecto GastroRestoCloudApi
```


# liga de mi netlify logeado con mi cuenta de github
https://app.netlify.com/teams/edyaca-git/projects











