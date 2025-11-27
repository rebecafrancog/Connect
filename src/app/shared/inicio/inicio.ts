import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  template: `
<header class="header">
  <div class="container header-content">
    <div class="logo">
      <img src="connect-3.png" alt="Connect" width="40" height="35">
      <span class="logo-text">Connect</span>
    </div>
    <div class="header-buttons">
      <button class="btn btn-ghost" onclick="window.location.href='login.html'">Login</button>
      <button class="btn btn-light" onclick="window.location.href='cadastro.html'">Cadastre-se</button>
    </div>
  </div>
</header>

<section class="hero">
  <div class="container hero-content">
    <h1 class="hero-title">Bem-vinde ao Connect</h1>
    <p class="hero-description">
    Conecte-se com amantes de música, artistas e fãs ao redor do mundo.
    </p>
    <button class="btn btn-light btn-large" onclick="window.location.href='login.html'">
      Conecte-se agora
    <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
    </button>
  </div>
</section>
<div class="cta-card">
  <h2 class="cta-title">Pronto Para Transformar Sua Vida?</h2>
    <p class="cta-description">
    Não somos apenas uma plataforma. Somos um movimento guiado pela paixão pela música.
    Se você também carrega essa chama, seja você fã ou artista, o seu lugar é aqui. Cadastre-se e faça parte dessa conexão.
    </p>
  <button class="btn btn-light btn-large" onclick="window.location.href='cadastro.html'">
    Criar Minha Conta Grátis
  </button>
  </div>

    <footer class="footer">
        <div class="container">
            <p class="footer-text">© 2025 Connect. Criado por Eloisa Horacio e Rebeca Franco.</p>
        </div>
    </footer>
  `
})
export class Inicio {

}
