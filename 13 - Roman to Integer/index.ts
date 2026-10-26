// @ts-ignore
function romanToInt(s: string): number {
    let romanNumberValue = 0;
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "I":
                if (s[i + 1] == "V") {
                    romanNumberValue += 4;
                } else if (s[i + 1] == "X") {
                    romanNumberValue += 9;
                } else {
                    romanNumberValue += 1;
                }
                break;
            case "V":
                romanNumberValue += 5;
                break;
            case "X":
                if (s[i + 1] == "L") {
                    romanNumberValue += 40;
                } else if (s[i + 1] == "C") {
                    romanNumberValue += 90;
                } else {
                    romanNumberValue += 10;
                }
                break;
            case "L":
                // +=
        }
    }
}

console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));