import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  template: `
  <body class="auth-page">
    <div class="auth-container">
        <button class="btn btn-dark btn-back" onclick="window.location.href='index.html'">
            <svg class="icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Voltar
        </button>
        <div class="auth-card">
            <div class="auth-header">
                <div class="auth-icon-wrapper">
                  <img src="connect-3.png" width="40" height="35">
                </div>
                <h1 class="auth-title">Bem-vinde de volta!</h1>
                <p class="auth-description">Entre para ter acesso a sua conta</p>
            </div>
          <div class="tabs-container">
            <div class="tabs-header">
                <button class="tab-btn active" data-tab="login">Entrar</button>
                <button class="tab-btn" data-tab="signup">Cria Conta</button>
            </div>
        </div>
            <form id="loginForm" class="auth-form">
                  <div class="tab-content active">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-input" placeholder="seu@email.com" required>
                    <label for="password" class="form-label">Senha</label>
                    <input type="password" id="password" class="form-input" placeholder="••••••••" required>
                </div>
                <button type="submit" class="btn btn-light btn-full">Entrar</button>
            </form>

            <form id="signupForm" class="auth-form">
              <div class="tab-content active">
                    <label>Nome de Usuário</label>
                    <input type="text" id="signup-name">

                    <label>Email</label>
                    <input type="email" id="email" class="form-input" placeholder="seu@email.com" required>

                    <label>Senha</label>
                    <input type="password" id="password" class="form-input" placeholder="••••••••" required>

                    <label>Data de Nascimento</label>
                    <input type="date" id="signup-birth">
           
                    <label>Gênero</label>
                    <select id="signup-gender">
                        <option value="" disabled selected>Selecione...</option>
                        <option value="female">Feminino</option>
                        <option value="male">Masculino</option>
                        <option value="non-binary">Não-binário</option>
                        <option value="other">Prefiro não informar</option>
                    </select>
              </div>
            </form>
        </div>
    </div>
  `
})
export class Login {
  
}
