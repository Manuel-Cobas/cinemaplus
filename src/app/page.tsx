import { HomeSlider } from "@/components/sliders/home-slider";
import { MovieSlider } from "@/components/sliders/movie-slider";
import { HomeNavigation } from "@/components/navigations/home-nav";

import { getMovies } from "@/services/tmdb-service";
import { GENRE_LISTS } from "@/config/tmdb/genre-lists";

export default async function Home() {
  const popular = await getMovies({ byGenre: null, byQuery: null });
  const draftPromiseAll = GENRE_LISTS.es.map((g) =>
    getMovies({ byGenre: g.id.toString(), byQuery: null })
  );

  const movies = await Promise.all(draftPromiseAll.slice(0, 5));
  console.log(GENRE_LISTS.es.length);
  return (
    <>
      <HomeNavigation />
      <main className="min-h-screen mb-20">
        <div className="relative w-full h-[56.5vw] mb-10">
          <HomeSlider movies={popular.results.slice(0, 5)} />

          <div className="absolute bottom-0 right-0 left-0 z-10 flex items-center justify-center gap-8 bg-blue-600">
            <span className="text-lg animate-bounce mt-2">👇</span>
            <a href="" className="text-[16px] font-semibold text-white">
              Ver mas peliculas
            </a>
            <span className="text-lg animate-bounce mt-2">👇</span>
          </div>
        </div>

        {GENRE_LISTS.es.slice(0, 5).map((g, index) => (
          <section key={g.id} className="flex flex-col px-12 py-6 gap-4">
            <header>
              <h2 className="text-3xl font-semibold text-white">{g.name}</h2>
            </header>

            <MovieSlider movies={movies[index].results.slice(0, 10)} />
          </section>
        ))}
      </main>

      <footer className="p-16 bg-blue-600"></footer>
    </>
  );
}

/** Notas para la home page (Sabado 11/11/2023 8:17PM)
 * 
 * 1 - Encontrar la forma de cargar los sliders poco a poco
 *  1.1 - Investigar hasta que punto sale rentable el Promise.all
 *  1.2 - de ser rentable separar la carga de la page
 *    1.2.1 (propuesta) - cargar en el Promise.all las primeras 5 categorias 
 * 
 * 2 - Abstraer el listado de categorias en un client-component
 *  2.1 (propuesta) - Reutilizar el infinite scroll del search 
 *  para cargar las primeras 5 categorias.
      `DESCARTADA` 2.1.1 (propuesta descartada) - al renderizar las cards darle prioridad
      al primer lote de imagenes de cada slider cargado en el Promise.all

  3 (propuesta) - Reposicionar los elementos de la navegacion de la page
    3.1 (Jusitificación) seria interesante agregar a la navegacion
    principal un boton para iniciar sesión, ya que al entrar al
    buscador se muestra la profile-card para que el usuario
    pueda acceder a la informacion de su perfil.

    3.2 (Tentativa) - dejar la navegacion tal y como esta
    y al entrar al buscador, mientras se cargan las peliculas
    mas populares, podemos comprobar si hay una sesion iniciada
    de ser el caso el usuario podra acceder a su informacion
    de perfil y de lo contrario mostrar un boton para 
    iniciar sesion.
      3.2.1 (Justificacion) - La aplicacion no necesita con urgencia
      las credenciales del usuario para colocar un boton de login 
      al inicio, porque es meramente informativa y solo necesitara
      iniciar sesion al querer interactuar con los registros.
 */

/** Propuestas Generales
 * 1 (propuesta) - Hacer un pequeño tutorial en el buscador,
 * teniendo en cuenta que se quiere dar una buena impresion
 * en este proyecto academico y la cantidad de opciones que
 * se quieren anexar a la app, seria ideal un tutorial opcional
 * para aquellos usuarios que no tengan como costumbre
 * descubrir poco a poco las posibilidades que les ofrecen
 * los productos digitales.
 *  1.1 (Analisis) - esta idea esta genial, pero alargaria el tiempo
 *  de desarrollo y puede que la mayoria de opciones y funcionalidades
 *  se puedan posisionar dentro de la interfaz grafica de tal forma en
 *  que el usuario con lenguaje visual y con ayuda de los iconos descriptivos
 *  pueda ir intuyendo cada una de las opciones que les ofrece el producto a
 *  medida que lo vaya usando.
 *  1.1.2 (Negativa) - Si el producto estuviese pensado para
 *  generar ingresos con baja inversion y las peliculas pudiesen
 *  ser vistas por los usuarios mediante un plan de pago,
 *  el analisis 1.1 seria bastante asertado, pero esta aplicacion
 *  solo tiene como proposito demostar mis capacidades tecnicas
 *  para generar experiencias de usuario minimamente satisfactorias
 *  y que les genere interes a futuros contratistas o marque la
 *  diferencia entre los demas proyectos revisados en algun proceso
 *  de seleccion de nuevo personal. Lo importante es que se pueda
 *  ver rapidamente todo lo que ofrece el producto y con un tutorial
 *  no solo me veria obligado a aprender cosas nuevas sino que tambien
 *  de cierto modo le facilito la revision a cualquier revisor, porque
 *  asi tiene una amplia vision de lo que quise lograr con mi producto
 *  y de lo que soy capaz de hacer para que el usuario se sienta de la
 *  mano en todo momento y que el uso constante de mi producto se vuelva
 *  algo cotidiano en su dia a dia facilmente, logrando lo que denomino
 *  "la retencion sana" haciendo que el usuario le guste mi producto e
 *  incluso pueda "encariñarse" o volverse su alternativa favorita con
 *  respecto a otros productos de la misma indole.
 *
 */
