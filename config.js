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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94788181299";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_23_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODksXG4gICAgICAgIDgyLFxuICAgICAgICA2NixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNyxcbiAgICAgICAgNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUwLFxuICAgICAgICA1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjMyLFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgOTcsXG4gICAgICAgIDgxLFxuICAgICAgICAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTEsXG4gICAgICAgIDc0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgODEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDc2LFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTYsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA5NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDcxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQyLFxuICAgICAgICAxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDU0LFxuICAgICAgICAyMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxODMsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjMyLFxuICAgICAgICA1LFxuICAgICAgICA3NCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5akNyNUtEV1BIQ0grSjN4Uk9QN1l0aDVvanpYcUIxdC9aUVA5RFFNVXhNPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJveFdweEZiblN0aWsxdk4zYlJ5bzhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjRmM2QzODk3LWUzMzEtNDUxOS1hNDkyLWVkMmUyOWEzMDg5N1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICA4NCxcbiAgICAgIDExMyxcbiAgICAgIDEyMyxcbiAgICAgIDIzMCxcbiAgICAgIDM5LFxuICAgICAgMzMsXG4gICAgICAxMzUsXG4gICAgICA4MixcbiAgICAgIDIxMyxcbiAgICAgIDM4LFxuICAgICAgMjI3LFxuICAgICAgMTU1LFxuICAgICAgMjMsXG4gICAgICAxNTEsXG4gICAgICAyMTgsXG4gICAgICAxNTMsXG4gICAgICAyNCxcbiAgICAgIDE5OSxcbiAgICAgIDE2NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICAyMzIsXG4gICAgICAxMTAsXG4gICAgICA4MixcbiAgICAgIDAsXG4gICAgICAxOCxcbiAgICAgIDEwOCxcbiAgICAgIDEyLFxuICAgICAgNTksXG4gICAgICAxMjksXG4gICAgICA1MixcbiAgICAgIDE0NCxcbiAgICAgIDM3LFxuICAgICAgNjUsXG4gICAgICAyOCxcbiAgICAgIDQ2LFxuICAgICAgMjEyLFxuICAgICAgMjQ3LFxuICAgICAgMTA5LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMkM0WlRYMU5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0Nzg4MTgxMjk5OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzM4NjA3Nzk1MDc4MzM6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzI0dmY4RUVQR0xyYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJZQStIRG40RUFPM2F5QXJZeXFFaVAvNXErc0wxVXNwbzNLaFJKd0dzcWdZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInFUeEtxemZoVDdRdjBpNGxScUorS0E4Q2hzaDNXOEdybStNNnh5WTQrVzhkbGp1TFNhRDN1aU5kYjEwMUJadmQxc0s4YWNWdHdoTlNweWVsLzJsekRRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpTR0dXcHlkTHdIM1gvMkw0SDF5S1FBc0w0clVLZ2JYQ1hWUXI1clpqaTB2TWVVNmdEZ29XMVpzU09XeFYySG5wMjZBeFZtaGJjWDZGWlZ0dkZydWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0Nzg4MTgxMjk5OjMwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUwMDU5NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNVL1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1UvLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
