// ### 題目一：變數練習
// 情境：Alex 正在健身房鍛鍊，他正在使用跑步機慢跑，請用變數描述以下狀態：

// 1. 請宣告一個 `const` 變數名稱為 `alexAge`，並賦予值為 `25`。
// 2. 請宣告一個 `const` 變數名稱為 `alexMembershipID`，並賦予值為字串 `"GYM2024-12345"`。
// 3. 請宣告一個 `const` 變數名稱為 `isRunningOnTreadmill`，並賦予值為 `true`。
// 4. 使用 `console.log()` 輸出 `alexAge`、`alexMembershipID` 和 `isRunningOnTreadmill`。

// 1.1 範例

/**
 * Description placeholder
 *
 * @type {number} alexAge 客戶alex年齡
 */
const alexAge = 25;
/**
 * @type {string} alexMembershipID 客戶alex 會員id
 */
const alexMembershipID = "GYM2024-12345";
/**
 * @type {boolean} isRunningOnTreadmill  狀態-客戶是否正在跑步機運動
 */
const isRunningOnTreadmill = true;
console.log('alexAge', alexAge, 'alexMembershipID', alexMembershipID, 'isRunningOnTreadmill', isRunningOnTreadmill);

// ### 題目二：變數命名練習
// - 瑜伽團課 - 300 元
// - 重訓團課 - 500 元
// - 重訓 1 對 1 課程 - 1500 元
// 情境：Alex 這個月的運動預算有 3000 元
// 請修改以下中文變數名稱，讓他符合變數語意
/**
 * @type {number} yogaClassGroupPrice 瑜珈團體課費用
 */
const yogaClassGroupPrice = 300;
/**
 * @type {number} weightTrainingClassGroupPrice 重訓團體課費用
 */
const weightTrainingClassGroupPrice = 500;
/**
 * @type {number} weightTrainingClassIndividualPrice 重訓一對一課程費用
 */
const weightTrainingClassIndividualPrice = 1500;
/**
 * @type {number} AlexBudgetOfThisMonth 客戶Alex本月預算
 */
const AlexBudgetOfThisMonth = 3000;

// ### 題目三：變數計算
// 呈上題，Alex 想要規劃好自己的運動課程，需符合以下三個條件，請將花費總數計算在 AlexBudget 上，一起幫幫他吧！
// 條件一：一定至少要買 1 堂重訓團課和瑜伽團課
// 條件二：瑜伽團課只能一次買 3 堂
// 條件三：一定要花到 2400 以上，並購買 5 堂課程

const AlexBudget = AlexBudgetOfThisMonth - yogaClassGroupPrice*3 - weightTrainingClassGroupPrice*4

console.log(`Alex 買完課程了，他一共剩下 ${AlexBudget} 元`);

// ### 題目四：線稿圖截圖，看圖宣告變數
// 請參考資料夾內 q4.webp 圖片
// 請依照你看到的內容來嘗試設計變數和值（至少 3 個）

/**
 * @type {number} pricePerClass 每堂課價格原價
 */
const pricePerClass = 200
/**
 * @type {number} packageClassAmounts 組合包內含課程數量
 */
const packageClassAmounts = 14
/**
 * @type {number} discount 組合包優惠折數
 */
const discount = 0.9
/**
 * @type {number} packagePrice 組合包價格
 */
const packagePrice = pricePerClass*pricePerClass*discount

// ### 題目五：布林值與變數定義，看是否有用對 const, let
// 情境：Alex 在往健身房的路上，望向城市的風景，請描述她看到的一切，並宣告變數與賦予值
// 4-1. Alex 在等紅綠燈，他抬頭看一下現在是紅燈，還有 28 秒綠燈（最多 3 個宣告）
// 4-2. 目前一起等待的機車有 8 台
// 4.3. Alex 望向天空，看到天上有 5 朵白雲和 1 顆太陽

// 4.1
/**
 * @type {string} trafficLightSignal 紅綠燈燈號 red、yellow、green
 */
let trafficLightSignal = 'red' 
/**
 * @type {number} remainingSeconds 剩餘燈號秒數
 */
let remainingSeconds = 28

//4.2
/**
* @type {number} waitingMotors 一起等待機車數
*/
let waitingMotors = 8
//4.3
/**
* @type {number} couldAmounts 雲朵數
 */
let couldAmounts = 5
const sun = 1
const alexEyesView = `Alex看到${couldAmounts}朵白雲和${sun}顆太陽`


// ### 題目六：情境題：簡單變數計算
// 情境：Alex 每天都會帶著 2000cc 的水壺
// 他早上喝了 500cc
// 中午又喝了 800cc
// 下午去健身前，先裝了 1000cc 的水
// 健身時，又喝掉了 700cc
// 那麼他的水壺還剩下多少 cc 的水？
// 以下的 Code 寫到一半，再請幫幫 Alex

/**
 * @type {number} myWater 水壺剩餘水量
 */
let myWater = 2000; // 水壺容量
myWater -= 500; // 早上喝了 500cc
myWater -= 800; 
myWater += 1000
myWater -= 700

console.log(`Alex 的水壺還有 ${myWater}cc 的水`);

// ### 題目七：情境題：變數計算
// 情境：Anna 每週都會到單次計費型的健身房運動，週日運動結束後，想知道自己本週的消費金額，但結帳系統出了點問題，Anna 決定自己用 JS 來計算。
// Anna 的總金額（totalBill）先從零開始計算。
// 健身房計費為：每小時器械使用費 50 元，每堂團體課程費用 150 元
// 她本週用了器械 3 小時。
// 她本週參加了 2 堂團體課程。

/**
 * @type {number} totalBill 帳單金額
 */
let totalBill = 0;
/**
 * @type {number} machineUsePrice 每小時機器健身費用
 */
const machineUsePrice = 50;
/**
 * @type {number} groupClassPrice 每堂團課費用
 */
const groupClassPrice = 150;

const machineUsePriceTotal = machineUsePrice * 3
const groupClassesTotal = groupClassPrice * 2
const total = machineUsePriceTotal + groupClassesTotal

console.log(
  `Anna 本週器械使用費共 ${machineUsePriceTotal} 元，團體課費用共 ${groupClassesTotal} 元，一共消費金額是 ${total}元`
);

// ### 題目八：變數重新賦予值
// 情境：請依照以下程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更
let a = 8; // 範例：宣告了一個 a 的變數，並賦予了一個 8 的數字型別
let b = 0; // 宣告了一個 b 的變數，並賦予了一個 0 的數字型別
a = 13; // 重新賦予a 變數新的資料，為13的數字型別
a = b + 4; // 重新賦予a 變數新的資料，為一段表達運算式 b+4 = 4，這段運算結果的數值會賦予給a為4
a - b; // 進行a-b 運算(4-0)，結果4
b += 1; // 可以看做是 b=b+1，b會被重新賦值變成1 

// ### 題目九：型別查詢
// 請不要觀看 console.log，透過註解告知解答每個變數的型別
let c = 'world'; // 字串string型別
let d = 456; // 數字number型別
let e = c + d; // JS隱性轉型 變成 'world456' 字串型別
let f = false; // 布林boolean型別
let g = d + d; // 數字相加，結果為912，g為數字型別
let h = f + g; // 數字和布林值相加，布林值會隱性轉型(true=1/false=0)，因此等於 0 + 912 = 912，h為數字型別

// 請從以下新增註解，告知上面每行各別是哪些型別
// a 是 string
// b 是 number

// c是字串string
// d是數字number
// e是字串string
// f是布林boolean型別
// g是數字number
// h為數字number



// ### 題目十：傳值與傳參考
// 情境：請依照程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
// 以下程式碼請勿變更

let numberArr1 = [5, 10, 15];
let numberArr2 = numberArr1;
numberArr2.push(20);
numberArr2 = [25, 30, 35];
console.log(numberArr1, numberArr2);

// 宣告numberArr1變數，並被以陣列[5, 10, 15]賦值
// 宣告numberArr2變數，並被以numberArr1賦值，因為numberArr1為陣列型別，兩者會指向同記憶體參考位置(call by reference)
// numberArr2.push(20)，對numberArr2陣列末端增加一個數字型態20的資料，numberArr1也同樣會改變
// 重新賦予變數numberArr2，一個新的陣列資料[25, 30, 35]，但numberArr1的引用資料指向還是保持原來的
// 結果: [5, 10, 15, 20], [25, 30, 35]
