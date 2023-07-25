import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

const App = () => {
  return (
    <main>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h6"></Typography>
        </Toolbar>
      </AppBar>
    </main>
  );
};

export default App;
