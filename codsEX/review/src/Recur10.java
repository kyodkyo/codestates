import java.util.Arrays;

public class Recur10 {
    public static void main(String[] args) {
        boolean output = checkLogic(new boolean[]{true, true, false});
        System.out.println(output);
    }

    public static boolean checkLogic(boolean[] arr){
        if(arr.length==0){
            return true;
        }

        boolean head = arr[0];
        boolean[] tail = Arrays.copyOfRange(arr, 1, arr.length);

        if(head && checkLogic(tail)){
            return true;
        }

        return false;
    }
}
