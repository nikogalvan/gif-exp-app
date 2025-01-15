/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem /> ", () => {
  const title = "Hero";
  const url =
    "https://media4.giphy.com/media/v1.Y2lkPWQwNDZhZDAxMHBjbm51Mng0emhsdm9pYmNseWQwd3NjZnhkajgxYWN4bG50NzVheSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/arbHBoiUWUgmc/giphy.gif";

  test("debe hacer match con el snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debee de mostrar la imagen con el URL y el ALT indicado", () => {
    // Renderiza el componente GifItem con las props title y url.
    render(<GifItem title={title} url={url} />);

    // Alternativa para depuración: Puedes usar screen.debug() para inspeccionar el contenido renderizado.
    // screen.debug();

    // Alternativa: Probar directamente las propiedades del elemento img obteniéndolo por su rol.
    // expect(screen.getByRole("img").src).toBe(url); // Verifica que la propiedad src sea igual a url.
    // expect(screen.getByRole("img").alt).toBe(title); // Verifica que la propiedad alt sea igual a title.

    // Destructuración: Obtiene las propiedades src y alt del elemento img.
    const { src, alt } = screen.getByRole("img");

    // Comprueba que src coincide con la URL proporcionada.
    expect(src).toBe(url);

    // Comprueba que alt coincide con el título proporcionado.
    expect(alt).toBe(title);
  });

  test("debe mostrar el titulo en el component", () => {
    render(<GifItem title={title} url={url} />);
    //console.log(screen.getByText(title));

    expect(screen.getByText(title)).toBeTruthy();
  });
});
