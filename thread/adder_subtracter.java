package thread;


class SharedCounter {
    private int counter = 1;

    synchronized void add() {
        if (counter <= 100) {
            counter++;
            System.out.println("Added 1: " + counter + " " + Thread.currentThread().getName());
        }
    }
    synchronized void subtract() {
        if (counter > 1) {
            counter--;
            System.out.println("Subtracted 1: " + counter + " " + Thread.currentThread().getName());
        }
    }
}
class Adder implements Runnable {
    SharedCounter sharedCounter;

    Adder(SharedCounter sharedCounter) {
        this.sharedCounter = sharedCounter;
    }

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            sharedCounter.add();
        }
    }
}

class Subtractor implements Runnable {
    SharedCounter sharedCounter;

    Subtractor(SharedCounter sharedCounter) {
        this.sharedCounter = sharedCounter;
    }

    @Override
    public void run() {
        for (int i = 0; i < 100; i++) {
            sharedCounter.subtract();
        }
    }
}


public class adder_subtracter {
    public static void main(String[] args) {
        SharedCounter sharedCounter = new SharedCounter();

        Thread adderThread = new Thread(new Adder(sharedCounter));
        Thread subtractorThread = new Thread(new Subtractor(sharedCounter));

        adderThread.start();
        subtractorThread.start();
    }
}
