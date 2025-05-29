import { PencilLineIcon } from '@phosphor-icons/react'

import style from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
  return (
    <aside className={style.sidebar}>
      <img 
        className={style.cover}
        src="https://images.unsplash.com/photo-1549605659-32d82da3a059?q=40&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>

      <div className={style.profile}>
        <Avatar src="https://github.com/GuilhermeBRS.png" />
        <strong>GuiBRsan</strong>
        <span>Software Eng.</span>
      </div>

      <footer>
        <a href="#">
          <PencilLineIcon size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}