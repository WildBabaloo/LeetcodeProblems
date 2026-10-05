import java.util.Stack;

public class main {
    static void main() {
        String s1 = "()";
        String s2 = "()[]{}";
        String s3 = "(]";
        String s4 = "([])";
        String s5 = "([)]";

        System.out.println(isValid(s1));
        System.out.println(isValid(s2));
        System.out.println(isValid(s3));
        System.out.println(isValid(s4));
        System.out.println(isValid(s5));
    }

    public static boolean isValid(String s) {
        Stack<String> stack = new Stack<>();
        String[] split = s.split("");
        for (String stringSplit : split) {
            if (stringSplit.equals("(") || stringSplit.equals("[") || stringSplit.equals("{")) {
                stack.push(stringSplit);
                continue;
            }

            if (stack.isEmpty()) {
                return false;
            }

            if (stringSplit.equals(")")) {
                if (!stack.peek().equals("(")) {
                    return false;
                }

                stack.pop();
            }

            if (stringSplit.equals("]")) {
                if (!stack.peek().equals("[")) {
                    return false;
                }

                stack.pop();
            }

            if (stringSplit.equals("}")) {
                if (!stack.peek().equals("{")) {
                    return false;
                }

                stack.pop();
            }
        }

        return stack.isEmpty();
    }
}
