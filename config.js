const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "9692713526";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_07_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgODIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgODEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDMwLFxuICAgICAgICA5NixcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDksXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDM5LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDksXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg2LFxuICAgICAgICA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDgzLFxuICAgICAgICAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDU5LFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDU0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA5LFxuICAgICAgICA2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTE5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1OSxcbiAgICAgICAgODYsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMTUxLFxuICAgICAgICA4OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA1NyxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyOCxcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaXhZRWVHWVIwTWcrMHJCaWZVbXdzbGZNK1hIUDljc0JOaXRmVldzNndSRT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MTk2Njg2MjI1NDlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNDQjJCMjdBNDI2OEU1Nzc1NTBFRTM4OTNDMDZCQ0RCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTEyMjgzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTY2ODYyMjU0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkU2NTkxQ0E0RjJBMTc0MEY1NjI4MzY4NUY2MEE5NjdcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MTIyODMyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImVOb1FNQVU3U01TcW90eVdBa0F0Q1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYWRhNDNhMjYtYjQ4Ny00NzNhLWJiZjMtMmJiN2FhMzBmNzFhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NCxcbiAgICAgIDcsXG4gICAgICA5MixcbiAgICAgIDE2NyxcbiAgICAgIDE4OSxcbiAgICAgIDQzLFxuICAgICAgMjM3LFxuICAgICAgMTEwLFxuICAgICAgODksXG4gICAgICAyNyxcbiAgICAgIDI1LFxuICAgICAgMTIyLFxuICAgICAgOCxcbiAgICAgIDExOSxcbiAgICAgIDI3LFxuICAgICAgMjQxLFxuICAgICAgMTgxLFxuICAgICAgNDEsXG4gICAgICA4NixcbiAgICAgIDE0OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjMsXG4gICAgICA2MixcbiAgICAgIDcxLFxuICAgICAgOCxcbiAgICAgIDIyOCxcbiAgICAgIDE5OCxcbiAgICAgIDE4MCxcbiAgICAgIDY4LFxuICAgICAgNDAsXG4gICAgICAxNyxcbiAgICAgIDY5LFxuICAgICAgMjA1LFxuICAgICAgMTUwLFxuICAgICAgMzYsXG4gICAgICAyMTksXG4gICAgICAyMDUsXG4gICAgICAyNTUsXG4gICAgICAxOTgsXG4gICAgICA4NyxcbiAgICAgIDIyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSQUsxOUFHOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NjY4NjIyNTQ5OjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEyNjgyMjI0NzMwOTQ2Mzo0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuywqO2VtOyduFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09pOHhjd0NFSXYzM3JNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZERpeTVqMm01Qm1LcnFOTzN1NEdBZVMrSHFVa2dTb3R1d2hjdnZsRGhsdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHTkQ3S3RSUE8rUDArN0h6MThYcjRzTUdvWEJqWDRxRHhrVzRLWjBMVHUreDY0NUpybS9aN3NDaytORzYySDZxb2d6K080QkFuSjlRQU5mVXNGYVVBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtVEoxK1pUNzNIbnlEdjRZKzhYT2o2Q2hzbEdCdEY1VzRRbXlyZFpKdGZRTFptanFpMEhma3VCQTg3QXZoemVoaW1QQWw4enlRU3RYOXlna1hUWStEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk2Njg2MjI1NDk6NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDkyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxMjI4MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFML1pcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwvWi5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
