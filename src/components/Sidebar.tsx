import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
   return (
      <aside className={styles.sidebar}>
         <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1675794495985-6b24a2ce8bb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDgyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Imagem de capa" 
         />

         <div className={styles.profile}>

            <Avatar
               src="https://github.com/gregoryAlvim.png" 
            />

            <strong>Grégory Alvim</strong>
            <span>Web Developer</span>
         </div>

         <footer>
            <a href="#">
               <PencilLine size={20} />
               Editar seu perfil
            </a>
         </footer>
      </aside>
   );
}