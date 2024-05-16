### דוגמא // טיפת חלב
#### תיאור הפרויקט
מערכת לניהול תורים לתחנת טיפת חלב. באמצעות המערכת ניתן להזמין תור לאחות ולנהל את כלל התורים בתחנה.  
#### ישויות  
תינוק  
אחות  
תור  
#### מיפוי Routes לתינוק
שליפת רשימת התינוקות  

GET	[https://tipa.co.il/babies](https://tipa.co.il/babies)

שליפת תינוק לפי מזהה      

GET	[https://tipa.co.il/babies/1](https://tipa.co.il/babies/1)

הוספת תינוק

POST [https://tipa.co.il/babies](https://tipa.co.il/babies)

עדכון תינוק

PUT	[https://tipa.co.il/babies/1](https://tipa.co.il/babies/1)


#### מיפוי Routes לאחיות

שליפת רשימת האחיות

GET	[https://tipa.co.il/nurses](https://tipa.co.il/nurses)

שליפת אחות לפי מזהה

GET	[https://tipa.co.il/nurses/1](https://tipa.co.il/nurses/1)

הוספת אחות

POST [https://tipa.co.il/nurses](https://tipa.co.il/nurses)

עדכון אחות

PUT	[https://tipa.co.il/nurses/1](https://tipa.co.il/nurses/1)

#### מיפוי Routes לתורים

שליפת רשימת התורים

GET	[https://tipa.co.il/turns](https://tipa.co.il/turns)

שליפת תור לפי מזהה

GET	[https://tipa.co.il/turns/1](https://tipa.co.il/turns/1)

הוספת תור

POST [https://tipa.co.il/turns](https://tipa.co.il/turns)

עדכון תור

PUT	[https://tipa.co.il/turns/1](https://tipa.co.il/turns/1)

מחיקת תור 

DELETE [https://tipa.co.il/turns/1](https://tipa.co.il/turns/1)


בחרתי לא למפות Routes למחיקת תינוק ואחות. במקום זה אוסיף Routes לעדכון סטטוס  

PUT	[https://tipa.co.il/babies/1/status](https://tipa.co.il/babies/1/status)

PUT	[https://tipa.co.il/nurses/1/status](https://tipa.co.il/nurses/1/status)
