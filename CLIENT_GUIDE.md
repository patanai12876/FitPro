# FitPro Gym Website - Client Setup Guide 📖

**For: Non-Technical Users**
**Language: Simple & Easy**

---

## 🟢 How to Start Website (Super Easy)

### **Step 1: Double-click This File**
```
START_APP.bat
```
✅ 2 new windows will open automatically
✅ Wait 10 seconds for servers to start
✅ Go to: http://localhost:3000

**That's it! Website is now live!**

---

## ✅ How to Know It's Working

### **Check These 3 Things:**

1. **Backend Window** (black terminal, labeled "GYM_BACKEND")
   - Look for: ✅ Server running on http://localhost:5000
   - Look for: ✅ MongoDB Connected
   - ❌ If red error = ISSUE #1 (see below)

2. **Frontend Window** (black terminal, labeled "GYM_FRONTEND")
   - Look for: ✓ Ready in X ms
   - Look for: http://localhost:3000
   - ❌ If shows error = ISSUE #2 (see below)

3. **Website in Browser**
   - Go to: http://localhost:3000
   - Should see: Hero image + "FitPro Gym" text
   - Scroll down: See services, plans, trainers
   - ❌ If blank or 404 = ISSUE #3 (see below)

---

## ⚠️ Common Issues & Fixes

### **ISSUE #1: "Port 5000 already in use"**
**Error Message:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Fix:**
1. Open Task Manager (Ctrl+Shift+Esc)
2. Find: "node.exe" or "npm"
3. Right-click → Delete/End task
4. Close both terminal windows
5. Run START_APP.bat again

**Or Quick Fix:**
```
taskkill /F /IM node.exe
```

---

### **ISSUE #2: "Port 3000 already in use"**
**Error Message:**
```
Port 3000 is in use by process XXXX
```

**Fix:** Same as ISSUE #1
```
taskkill /F /IM node.exe
```
Then run START_APP.bat again

---

### **ISSUE #3: Website Shows "404 Not Found"**
**Error Message:** Page returns 404 when accessing pages

**Fix #1 (Easy):**
1. Close both terminal windows
2. Run START_APP.bat again

**Fix #2 (If still not working):**
1. Delete this folder:
   ```
   frontend/.next
   ```
2. Run START_APP.bat again

---

### **ISSUE #4: "Backend Fetch Not Working"**
**Symptoms:**
- Plans page is blank
- Services page empty
- Contact form can't submit

**Fix:**
1. Check Backend window
2. Look for: ✅ MongoDB Connected
3. If NOT connected:
   - Internet connection might be down
   - OR MongoDB server down
   - OR credentials wrong

**Contact Support:**
Send screenshot of Backend window error

---

### **ISSUE #5: Website Very Slow**
**Symptoms:**
- Takes 10+ seconds to load
- Pages load but very slow

**Likely Causes:**
1. Internet is slow → Can't reach MongoDB
2. Computer is overloaded

**Fixes:**
1. Close other heavy apps (Chrome with many tabs, Photoshop, etc.)
2. Restart computer
3. Run START_APP.bat again

---

## 🆘 Troubleshooting Checklist

**When something doesn't work, check:**

- [ ] Both terminal windows open and running?
- [ ] Backend window shows "✅ MongoDB Connected"?
- [ ] Frontend window shows "✓ Ready" message?
- [ ] No red errors in either window?
- [ ] Can access http://localhost:3000 in browser?
- [ ] Can scroll and see content (plans, services, trainers)?
- [ ] Contact form loads?

**If ANY checkbox is red → See the Issues section above**

---

## 📊 Website Features

### **Pages Available:**

| Page | URL | What to See |
|------|-----|------------|
| Home | http://localhost:3000 | Hero section, featured services, testimonials |
| Services | http://localhost:3000/services | All gym services (Cardio, Strength, Yoga, etc.) |
| Trainers | http://localhost:3000/trainers | Expert trainers list |
| Membership | http://localhost:3000/membership | 4 pricing plans |
| Contact | http://localhost:3000/contact | Contact form (connects to backend) |
| About | http://localhost:3000/about | Gym information |
| Privacy | http://localhost:3000/privacy | Privacy policy |
| Terms | http://localhost:3000/terms | Terms & conditions |

---

## 🔧 What's Running Behind the Scenes

**You don't need to know this, but:**

- **Backend Server** (Port 5000)
  - Receives data from frontend
  - Stores/retrieves from database
  - Handles contact form submissions

- **Frontend Website** (Port 3000)
  - Shows website to users
  - Fetches data from backend
  - Displays pages

- **Database** (MongoDB Cloud)
  - Stores: Membership plans, services, trainers, contact inquiries

---

## ⏹️ How to Stop Website

### **Method 1 (Easy):**
1. Click on Backend terminal window
2. Press: Ctrl+C
3. Click on Frontend terminal window
4. Press: Ctrl+C
5. Both windows will close

### **Method 2 (Forced):**
```
taskkill /F /IM node.exe
```

---

## 🆘 Emergency Support

### **If you can't fix it:**

**Take a screenshot of:**
1. The error message (from terminal window)
2. Browser address bar
3. What page you're trying to access

**Send to:** [Your Email/Support Contact]

**Include:**
- What were you doing?
- What error did you see?
- Screenshot of terminal windows

---

## 📝 Quick Reference

| Need to Do | Command/Action |
|-----------|----------------|
| Start website | Double-click `START_APP.bat` |
| Stop website | Press Ctrl+C in terminal windows |
| Fix port conflicts | Run `DIAGNOSE.bat` |
| Check if working | Visit http://localhost:3000 |
| Restart | Close terminals → Run START_APP.bat |

---

## ✅ Success Indicators

**Website is working perfectly when:**
- ✅ Backend window shows: "✅ MongoDB Connected"
- ✅ Frontend window shows: "✓ Ready"
- ✅ http://localhost:3000 loads instantly
- ✅ Can see all pages (Services, Trainers, Membership, Contact)
- ✅ Plans, services, trainers data loads from database
- ✅ Contact form submits successfully

---

## 🎓 Learning Resources

If you want to understand more:

1. **What is Node.js?** → Backend server framework
2. **What is Next.js?** → Frontend website framework
3. **What is MongoDB?** → Cloud database
4. **What is Express.js?** → Framework that runs on Node.js

**These are auto-managed. You just run START_APP.bat!**

---

## 📞 Support

**Common Questions:**

**Q: Website is slow?**
A: Close heavy apps (Chrome, Photoshop) and try again

**Q: Can't see plans/services?**
A: Backend might not be running. Check Backend window for errors

**Q: Getting 404 errors?**
A: Close terminals and run START_APP.bat again

**Q: Forms don't submit?**
A: Backend connection issue. Check Backend window logs

**Q: Already running?**
A: Kill with `taskkill /F /IM node.exe` then restart

---

## 🎉 You're All Set!

Run `START_APP.bat` and enjoy!

Any issues → Check "Common Issues & Fixes" section above

---

**Questions? Screenshot the error and contact support.**

**Happy hosting! 🚀**
