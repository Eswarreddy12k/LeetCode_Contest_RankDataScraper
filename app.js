const puppeteer = require("puppeteer");
const fs=require('fs')
/*const reader = require('xlsx')
const file = reader.readFile('./test.xlsx')


const ws = reader.utils.json_to_sheet(student_data)
  
reader.utils.book_append_sheet(file,ws,"Sheet3")
reader.writeFile(file,'./test.xlsx')*/


let url1 = `https://leetcode.com/contest/globalranking/`;
const scrape=async ()=>{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
      });
    const page = await browser.newPage();
    for(let i=9000;i<9152;i++){
        const url=url1+i+'/';
        await page.goto(url);
    await page.waitForSelector(".top-users")
    //setTimeout(()=>{console.log(i),1000})
    let title = await page.$eval(
        ".top-users",
        el => el.textContent
    );
    fs.appendFileSync('sample.txt',title, 'utf8');
    //console.log(title);

    }
    
    
}
scrape();

