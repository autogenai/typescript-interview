echo "Setting up frontend..."
npm install --prefix ./frontend

echo "Setting up backend"
npm install --prefix ./backend
npm run migrate --prefix ./backend
echo "Done"
