import java.util.Arrays;
import java.util.HashMap;

public class hashMapMethod {

    static void main() {
        System.out.println(Arrays.toString(twoSum(new int[]{2,7,11,15}, 9)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,2,4}, 6)));
        System.out.println(Arrays.toString(twoSum(new int[]{3,3}, 6)));
    }

    public static int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> hash = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            Integer value = hash.get(target - nums[i]);
            if (!(value == null)) {
                return new int[]{value, i};
            }

            hash.put(nums[i], i);
        }

        return null;
    }
}
