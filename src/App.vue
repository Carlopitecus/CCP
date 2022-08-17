<template>
  <div id="app">
    <nav  >
      <div>
        <div>
        <router-link class="links" to="/"><img src="./assets/Imagenes/logo.png" alt=""></router-link>
        </div>
        <div class="nav_menu-position">
      <router-link class="links" to="/">Inicio</router-link>
      <a href="https://sites.google.com/view/pastoral-ccp/p%C3%A1gina-principal">Formación</a>
      <!-- DropDown Area academica -->
      <div class="dropdown1">
        <button class="megaButton">Área Académica ></button>
        <div class="megaContent">
          <div class="megaRow">
            <div class="megaColumn">
              <h3>Biblioteca</h3>
              <div>
              <p>Catálogo de Biblioteca CRA, Biblioteca escolar UCE, Plán lector 2022, Libros para celebrar el otoño,....</p>
              <p></p>
              <router-link class="links" to="/Biblioteca">Ir a la Biblioteca</router-link>
              </div>
            </div>
            <div class="megaColumn">
              <h3>Psicopedagogía</h3>
             <p>Planificación, La escritura, Como enfrentar una evaluación, Técnicas de estudio, Comprensón lectura,...</p>
              <router-link class="links" to="/Psicopedagogia">Ir a Psicopedagogía</router-link>
            </div>
            <div class="megaColumn">
              <h3>Jefaturas de Curso 2022</h3>
              <p>Lista con las jefaturas de los cursos del año lectivo 2022 distribuido por ciclo</p>
              <a class="links" href="https://primersitio1php.000webhostapp.com/documentos/Jefaturas2022/Jefaturas_cursos_lectivo_2022.pdf">Jefaturas año 2022</a>
            </div>
          </div>
        </div>
      </div>
      <!-- DropDown Area Academica -->
      <!-- DropDown Admision-->
      <div class="dropdown1">
        <button class="megaButton">Admisión 2022 ></button>
        <div class="megaContent">
          <div class="megaRow">
            <div class="megaColumn">
              <h3>Proyecto Educativo</h3>
              <div>
                <p>Antecedentes generales, Contexto institucional, Marco institucional, Visión, Misión, Fundamentos filosóficos,...</p>
              <a class="links" mb-3 href="https://primersitio1php.000webhostapp.com/documentos/Proyecto_educativo/Proyecto_Educativo.pdf"> Ver Proyecto Educativo</a>              
              </div>
            </div>
            <div class="megaColumn">
              <h3>Reglamento de Evaluación, Calificación y PRomoción</h3>
              <p>Disposiciones Generales, Evaluación, Calificación, Promoción</p>
              <a class="links" href="https://primersitio1php.000webhostapp.com/documentos/Proyecto_educativo/REGLAMENTO_EVALUACION_Y_PROMOCION_2022.pdf">Ver Reglamento de Evaluación</a>
            </div>
            <div class="megaColumn">
              <h3>Reglamento Interno Escolar</h3>
              <p>Contexto legal, El cultivo de las virtudes, Herramientas formativas, Hitos formativos, Deberes de toda la comunidad,...</p>
              <a class="links" href="https://primersitio1php.000webhostapp.com/documentos/Proyecto_educativo/RIE_2022.pdf">Ver Reglamento Interno</a>
            </div>
          </div>
        </div>
      </div>
      <!-- DropDown Admision-->
      <!-- DropDown Alumnos-->
      <div class="dropdown1">
        <button class="megaButton">Alumnos ></button>
        <div class="megaContent">
          <div class="megaRow">
            <div class="megaColumn">
              <h3>Centro de Alumnos</h3>
              <div>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quos praesentium, officia eligendi est sint.</p>
              <router-link class="links" to="/Ceal">Ir a Centro de Alumnos</router-link>
              </div>
            </div>
            <div class="megaColumn">
              <h3>Útiles Escolares 2022</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam nisi odio excepturi maxime similique asperiores?</p>
              <a class="links" href="#">Ver Útiles Escolares</a>
            </div>
            <div class="megaColumn">
              <h3>Acceso a SchoolNet</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur porro soluta corrupti nesciunt delectus.</p>
              <a class="links" href="https://schoolnet.colegium.com/webapp/es_CL/login" target="_blank">Ir a SchoolNet</a>
            </div>
            <div class="megaColumn">
              <h3>Ex-Alumnos</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente earum at modi magnam, voluptatibus adipisci.</p>
              <a class="links" href="#">Ver Ex-Alumnos</a>
            </div>
            <div class="megaColumn">
              <h3>Galería de actividades</h3>
              <p></p>
              <a class="links" href="#">Ver Galería</a>
            </div>
          </div>
        </div>
      </div>
      <!-- DropDown Alumnos-->
      <!-- DropDown Alumnos-->
      <div class="dropdown1">
        <button class="megaButton">Alumnos ></button>
        <div class="megaContent">
          <div class="megaRow">
            <div class="megaColumn">
              <h3>Biblioteca</h3>
              <div>
              <a class="links" mb-3 href="http://186.67.104.254/mt">Catalogo CRA CCP</a>
              <a class="links" mb-3 href="https://www.colegiocapellanpascal.cl/ccpnew/Biblioteca/2022/PLAN_LECTOR_2022.pdf" target="_blank">Plan Lector 2022</a>
              </div>
            </div>
            <div class="megaColumn">
              <h3>Commercial</h3>
              <a class="links" href="#">Project 1</a>
              <a class="links" href="#">Project 2</a>
            </div>
            <div class="megaColumn">
              <h3>Non-Commerial</h3>
              <a class="links" href="#">Project 1</a>
              <a class="links" href="#">Project 2</a>
            </div>
          </div>
        </div>
      </div>
      <!-- DropDown Alumnos-->
      </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  padding: 30px;
  overflow: hidden;
  background-color: #253b80;
  font-family: Arial, Helvetica, sans-serif;
}
nav a {
  font-weight: bold;
  color: #8c6707;
  float: left;
  font-size: 16px;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #d9ac36;
}

body {
  margin: 0;
  padding: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}

.dropdown1 {
  float: left;
  overflow: hidden;
}
.dropdown1 .megaButton {
  font-size: 16px;
  border: none;
  outline: none;
  color: #8c6707;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit;
  margin: 0;
}
nav a:hover,
.dropdown1:hover .megaButton {
  background-color: rgb(0, 63, 146);
  color: #d9ac36;
}
.megaContent {
  text-align: center;
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  width: 100%;
  left: 0;
  z-index: 1;
}
.megaContent .megaHeader {
  background: rgb(119, 6, 194);
  padding: 16px;
  color: white;
}
.dropdown1:hover .megaContent {
  display: block;
}
.megaColumn {
  float: left;
  width: 25%;
  padding: 10px;
  /* background-color: rgb(243, 20, 20); */
  height: 250px;
   border-style: inset;
  
}
.megaColumn .links {
  color: black;
  padding: 16px;
  margin: 10px;
  text-decoration: none;
  display: block;
  text-align: left;
  border-bottom: 4px solid #253B80;
}
.megaColumn a:hover {
  background-color: #5983FF;
}
/*Float reset trick for clearing floats*/
.megaRow:after {
  content: "";
  display: table;
  clear: both;
}

.nav_menu-position{
  padding: 5rem 0 0 0;
}
</style>
