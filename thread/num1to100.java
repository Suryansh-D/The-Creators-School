package thread;

public class num1to100 implements Runnable {
    private int num;

    public num1to100(int num) {
        this.num = num;
    }

    @Override
    public void run() {
        System.out.println(num + " " + Thread.currentThread().getName());
    }

    public static void main(String[] args) {
        for (int i = 0; i < 100; i++) {
            num1to100 numP = new num1to100(i);
            Thread thread = new Thread(numP);
            thread.start();
        }
    }
}