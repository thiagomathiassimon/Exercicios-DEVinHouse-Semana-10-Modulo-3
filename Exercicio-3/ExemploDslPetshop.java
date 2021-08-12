package Exercicio-3;

public class ExemploDslPetshop {
    
    public static void main(String[] args) {
        
        Petshop.create().pet(new Pet("cat", "persian", "male", 2500.00));

        Petshop.list().forEach(System.out::println);

    }

}
