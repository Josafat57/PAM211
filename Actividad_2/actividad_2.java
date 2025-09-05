import java.util.Scanner;

class PAM {
    String reglamento;
    String lineamientos;
    String fechas;
    double porcentajes;
}

public class actividad_2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int opcion;
        do {
            System.out.println("\nMenú");
            System.out.println("1. Reglamento POO");
            System.out.println("2. Lineamientos de Classroom");
            System.out.println("3. Fechas de parciales");
            System.out.println("4.- Porcentajes por parcial");
            System.out.println("5.- Salir del programa");
            System.out.print("\nElige una opción: ");
            opcion = scanner.nextInt();
            scanner.nextLine();

            switch (opcion) {
                case 1:
                    System.out.println("\nSeleccionaste la opción: Reglamento POO");
                    System.out.println("\n 1.- Respeto");
                    System.out.println("\n 2.- Importante participación activa en orden");
                    System.out.println("\n 3.- No entregar trabajos incompletos");
                    System.out.println("\n 4.- No se aplican examen fuera de tiempo");
                    System.out.println("\n 5.- Plagio de trabajos = 0 para todos");
                    System.out.println("\n 6.- 3 faltas =  Final de parcial");
                    System.out.println("\n 7.- Calificación Máxima en final 8");
                    do {
                        System.out.print("\nEscribe 0 para regresar al menú: ");
                    } while (scanner.nextInt() != 0);
                    scanner.nextLine();
                    break;
                case 2:
                    System.out.println("\nSeleccionaste la opción: Lineamientos de Classroom");
                    System.out.println("\n 1.- Entregar los trabajos para su revisión");
                    System.out.println("\n 2.- Entrega en PDF");
                    System.out.println("\n 3.- Avisos de clase");
                    System.out.println("\n 4.- Entregas autorizadas con rettraso, 5 calif max");
                    do {
                        System.out.print("\nEscribe 0 para regresar al menú: ");
                    } while (scanner.nextInt() != 0);
                    scanner.nextLine();
                    break;
                case 3:
                    System.out.println("\nSeleccionaste la opción: Fechas de parciales");
                    System.out.println("\n 1er Parcial: 29/09/25");
                    System.out.println("\n 2do Parcial: 03/11/25");
                    System.out.println("\n 3er Parcial: 01/12/25");
                    System.out.println("\n Examenes Finales: 08/12/25");
                    do {
                        System.out.print("\nEscribe 0 para regresar al menú: ");
                    } while (scanner.nextInt() != 0);
                    scanner.nextLine();
                    break;
                case 4:
                    System.out.println("\nSeleccionaste la opción: Porcentajes por parcial");
                    System.out.println("                            1p         2p        3p");
                    System.out.println("Evidencia de conocimiento:  40%   |    40%   |   20%");
                    System.out.println("-----------------------------------------------------");
                    System.out.println("Evidencia de desempeño:     20%   |    20%   |   20%");
                    System.out.println("-----------------------------------------------------");
                    System.out.println("Evidencia de Producto:      30%   |    20%   |   40%");
                    System.out.println("-----------------------------------------------------");
                    System.out.println("Proyecto Integrador:        10%   |    20%   |   30%");
                    do {
                        System.out.print("\nEscribe 0 para regresar al menú: ");
                    } while (scanner.nextInt() != 0);
                    scanner.nextLine();
                    break;
                case 5:
                    System.out.println("Nos vemos!");
                    break;
                default:
                    System.out.println("\nOpción no válida.");
            }
        } while (opcion != 5);
        scanner.close();
    }
}