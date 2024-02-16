import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
// import locations from './locations.json'
import videos from './videos.json'
import DrawerCard from './DrawerCard';
import { useRef } from 'react';
import GeoMap from './Map';



const drawerWidth = 400;

export default function LocationDrawer() {

  return (
      <>
      <div style={{height:"100vh"}}>
        <GeoMap/>
      </div>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="right"
      >

        <Toolbar />
          <div align="center">
            {videos.map((location, index) => (
              <DrawerCard key={index} location={location} />
          ))}
          </div>
      </Drawer>
      </>
  );
}