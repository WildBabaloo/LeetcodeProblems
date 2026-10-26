import java.util.HashMap;

public class hashMethod {
    static void main() {
        System.out.println(containsDuplicate(new int[]{1, 2, 3, 4}));
        System.out.println(containsDuplicate(new int[]{1,2,3,1}));
        System.out.println(containsDuplicate(new int[]{1,1,1,3,3,4,3,2,4,2}));

    }

    public static boolean containsDuplicate(int[] nums) {
        HashMap<Integer, Integer> numHash = new HashMap<>();
        for (int num : nums) {
            if (numHash.containsKey(num)) {
                return true;
            }

            numHash.put(num, num);
        }

        return false;
    }
}
