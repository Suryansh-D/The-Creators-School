package thread;
import java.util.*;

public class main {
    class numbersPrinter implements Runnable{
        @Override
        public void run(){
            int N = 1;
            while (N <= 100){
                System.out.println(N + " " + Thread.currentThread().getName());
                N++;
            }
        }
    }

    public static void main(String[] args) {
        numbersPrinter numberPrinter1 = new main().new numbersPrinter();
        numberPrinter1.run();
    }
}

//adder subtractor fn for number 1 to 1000


