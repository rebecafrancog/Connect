import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
<body class="dashboard-page">
<div class="dashboard-layout">
<aside class="sidebar">
            <div class="sidebar-header">
                <img src="connect-3.png" alt="Connect" width="35" height="35">
                <span>Connect</span>
            </div>

          <nav class="sidebar-nav">
              <button class="nav-item" class="sidebar-link">
                <i class="fas fa-home"></i>
                <a routerLink="/inicio" routerLinkActive="active" class="nav-link">Início</a>
              </button>
              <button class="nav-item" class="sidebar-link">
                <i class="fas fa-search"></i>
                <a routerLink="/discover" routerLinkActive="active" class="nav-link">Descobrir</a>
              </button>
              <button class="nav-item" class="sidebar-link">
                <i class="fas fa-calendar"></i>
                <a routerLink="/events" routerLinkActive="active" class="nav-link">Eventos</a>
              </button>
              <button class="nav-item" class="sidebar-link">
                <i class="fas fa-fa-hashtag"></i>
                <a routerLink="/recommendations" routerLinkActive="active" class="nav-link">Para Você</a>
              </button>
              <button class="nav-item" class="sidebar-link">
                <i class="fas fa-fa-comment"></i>
                <a routerLink="/messages" routerLinkActive="active" class="nav-link">Mensagens</a>
              </button>
              <button class="nav-item" class="sidebar-link">
                <i class="fas fa-fa-bell"></i>
                <a routerLink="/notifications" routerLinkActive="active" class="nav-link">Notificações</a>
              </button>
              <button class="nav-item" class="sidebar-link">
                <i class="fas fa-fa-user"></i>
                <a routerLink="/profile" routerLinkActive="active" class="nav-link">Perfil</a>
              </button>
              <button class="nav-item" class="sidebar-link">
                <i class="fas fa-fa-universal-access"></i>
                <a routerLink="/acessibility" routerLinkActive="active" class="nav-link">Acessibilidade</a>
              </button>
          </nav>
</aside>
<div class="container">
<div id="feed-view" class="view active">
  <div class="card create-post">
  <div class="card mb-3">
  <div class="card-body">
    <textarea class="form-control" rows="3" placeholder="Compartilhe sua música favorita..."></textarea>
  <div class="d-flex justify-content-end mt-2">
  <div class="avatar" id="current-user-avatar"></div>
  <div class="post-actions">
    <div class="media-buttons">
      <button class="btn btn-ghost btn-sm">
        <i class="fas fa-image"></i>
        <span class="hide-mobile">Imagem</span>
      </button>
      <button class="btn btn-ghost btn-sm">
        <i class="fas fa-video"></i>
        <span class="hide-mobile">Vídeo</span>
      </button>
      <button class="btn btn-ghost btn-sm">
        <i class="fas fa-music"></i>
        <span class="hide-mobile">Música</span>
      </button>
  </div>
  <button class="btn btn-primary">Publicar</button>
  </div>
  </div>
  </div>
  <div class="card-body">
    <h6 class="card-title">{{post.author}}</h6>
    <p class="card-text">{{post.content}}</p>
  </div>
  </div>
</div>
`
})
export class Feed {
post: any;

}
