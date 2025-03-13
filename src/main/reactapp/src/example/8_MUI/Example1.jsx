// MUI : 리액트.jsx 기반의 미리 만들어진 컴포넌트를 제공하는 페이지
// -> 비슷한 페이지 : 부트스트랩

// 1. MUI 제공하는 컴포넌트 파트 : 1. Material UI 2. JOY UI 3. MUI X 4. toolpad

// Material MUI 설치 : https://mui.com/material-ui/getting-started/installation/
// 1) 컴포넌트 설치 : npm install @mui/material @emotion/react @emotion/styled
// 2) 컴포넌트 css 설치 : npm install @mui/material @mui/styled-engine-sc styled-components
// 2) 아이콘 설치 : npm install @mui/icons-material

// * 리액트(node.js) 환경에서 외부 라이브러리 다운로드 받는 방법
// ( 서버가 꺼져 있는 상태[터미널]에서 )
// 1. 리액트 최상위 폴더(패키지) 오른쪽 클릭 -> 통합 터미널 열기
// 2. 설치할 라이브러리 npm 코드 넣고 엔터 --> 알아서 설치 후 'package.json'에서 'dependencies'에 코드 자동 작성
// -> 협업( 다른 사람이 라이브러리 설치하면 'package.json' 변경되고 취합 이후에 다른 사람들은 npm install )
// npm install : 현재 'package.json' 파일 내 'dependencies' 코드의 라이브러리 자동 설치

// 3. 사용할 파일 위에 Material UI에서 사용하고 싶은 컴포넌트 코드를 가져오기


// <Button> : MUI에서 제공하는 마크업(컴포넌트) , 별도의 import 필요함
// <button> : HTML에서 제공하는 마크업(컴포넌트) , 별도의 import 필요없음

// <Rating> : MUI에서 제공하는 마크업(컴포넌트) , 별도의 import 필요함

import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';



export default function Example1(){
    return(
    <>
    <h3> Button </h3>
    <Button variant="outlined">Outlined</Button>
    <h3> Rating</h3>
    <Rating name="read-only" value={3} readOnly />
    <h3> Select </h3>
    <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">부서</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="부서"
        >
          <MenuItem value = {"인사팀"}>인사팀</MenuItem>
          <MenuItem value = {"개발팀"}>개발팀</MenuItem>
          <MenuItem value = {"영업팀"}>영업팀</MenuItem>
        </Select>
      </FormControl>
    <h3> List </h3>
    {/* JSX 문법에서 주석 처리 방법 */}
    {/* BOX : div와 비슷하게 mui 레이아웃(구역) 구성할 때 사용되는 컴포넌트 / 마크업 */}
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        {/* List : ul / ol 비슷하게 mui에서 리스트(목록) 구성할 때 사용되는 컴포넌트 */}
        <List>
           {/* ListItem : li */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="헐" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="대박" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      {/* Divider : <hr />처럼 구분선 지어주는 컴포넌트 */}
      <Divider />
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
    </>
    )
}