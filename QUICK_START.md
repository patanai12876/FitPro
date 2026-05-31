# FitPro Gym - Quick Start Guide 🚀

## **First Time Setup (Run Once)**

```bash
# Windows
SETUP.bat

# Mac/Linux
bash START_APP.sh
```

This will:
✅ Install all dependencies
✅ Seed database with plans & services
✅ Create `.env` files

---

## **Start Application (Every Time)**

### **Windows:**
```bash
START_APP.bat
```
- Opens 2 new windows automatically
- Backend on port 5000
- Frontend on port 3000

### **Mac/Linux:**
```bash
bash START_APP.sh
```

---

## **What Each Script Does**

| Script | Purpose |
|--------|---------|
| `SETUP.bat` | First-time setup only |
| `START_APP.bat` | Start both services |
| `START_APP.sh` | Linux/Mac startup |

---

## **If Issues Occur**

### **Issue: Port Already in Use**
```bash
# Kill all Node processes
taskkill /F /IM node.exe    # Windows
pkill node                   # Mac/Linux
```

Then run `START_APP.bat` again

### **Issue: Frontend 404 Errors**
```bash
# Clear Next.js cache
rmdir /s /q "frontend\.next"   # Windows
rm -rf frontend/.next          # Mac/Linux
```

Then run `START_APP.bat` again

### **Issue: Backend Fetch Not Working**
```bash
# Check MongoDB connection in backend/.env
# Ensure MONGODB_URI is correct and IP is whitelisted
```

---

## **URLs**

- 🌐 **Frontend:** http://localhost:3000
- 🔧 **Backend API:** http://localhost:5000/api
- 📊 **Health Check:** http://localhost:5000/health

---

## **Available Pages**

| Page | URL | Features |
|------|-----|----------|
| Home | / | Featured services, plans, testimonials |
| Services | /services | All gym services with filters |
| Trainers | /trainers | Expert trainers list |
| Membership | /membership | Pricing plans |
| Contact | /contact | Contact form (sends to backend) |

---

## **Project Structure**

```
Gym website/
├── backend/
│   ├── src/
│   │   ├── server.js (Express app)
│   │   ├── models/ (Database schemas)
│   │   ├── routes/ (API endpoints)
│   │   └── middleware/ (Auth, errors)
│   ├── seed.js (Seed services)
│   ├── add-plans.js (Add membership plans)
│   └── package.json
│
├── frontend/
│   ├── app/ (Next.js pages)
│   ├── components/ (React components)
│   ├── utils/ (API client)
│   └── package.json
│
├── START_APP.bat (🟢 Use this!)
├── SETUP.bat (Use only first time)
└── package.json (Workspace config)
```

---

## **Common Commands**

```bash
# Start development
START_APP.bat

# Stop services
Ctrl+C in each window

# Reseed database
cd backend && npm run seed && node add-plans.js

# View backend logs
Check terminal window labeled "GYM_BACKEND"

# View frontend logs
Check terminal window labeled "GYM_FRONTEND"
```

---

## **Environment Files**

**Frontend (.env.local):**
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_MAPS_API_KEY=YOUR_KEY
NODE_ENV=development
```

**Backend (.env):**
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your-secret
```

---

## **Troubleshooting Checklist**

- [ ] Both terminal windows open?
- [ ] No error messages in console?
- [ ] Backend shows "✅ MongoDB Connected"?
- [ ] Frontend shows "✓ Ready" message?
- [ ] Can access http://localhost:3000?
- [ ] Backend data (plans, services) loading?

---

## **Need Help?**

Check backend logs for:
- `EADDRINUSE` → Port conflict, kill processes
- `MongoDB connection failed` → Check MONGODB_URI in .env
- `CORS error` → Check origin settings in backend/src/server.js

---

✅ **All Set! Happy Coding! 🎉**
