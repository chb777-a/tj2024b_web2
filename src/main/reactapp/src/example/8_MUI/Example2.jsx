// JOY UI :
// 1. 설치 : npm install @mui/joy @emotion/react @emotion/styled

// table : html vs Table : MUI 컴포넌트

import Table from '@mui/joy/Table';
import Button from '@mui/joy/Button';
import { useState } from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';


export default function Example2(){
    const [open, setOpen] = useState(false);
    return(
        <>
            <h3> Table </h3>
            <Table>
                <thead>
                    <tr>
                        <th> Title </th> <th> Writer </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Hello </td> <td> Mr.choi </td>
                    </ tr>
                    <tr>
                        <td> HI </td> <td> Mr.park </td>
                    </tr>
                </tbody>
            </Table>

            <h3> Modal </h3>
            <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
            Open modal true : 모달이 열린 상태 , false : 모달이 닫힌 상태
            </Button>

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                    <Sheet
                    variant="outlined"
                    sx={{ maxWidth: 500, borderRadius: 'md', p: 3, boxShadow: 'lg' }}
                    >
                    <ModalClose variant="plain" sx={{ m: 1 }} />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        sx={{ fontWeight: 'lg', mb: 1 }}
                    >
                        안녕하시오~!
                    </Typography>
                    <Typography id="modal-desc" textColor="text.tertiary">
                        매우 반갑소!
                    </Typography>
                    </Sheet>
            </Modal>

            <h3> Chart </h3>
            {/* xAxis 속성 data : [ 가로축 ] , series : 축의 값 */}
            <BarChart
                xAxis={[{ scaleType: 'band', data: ['인사팀', '개발팀', '영업팀'] }]}
                series={[{ data: [100, 100, 500] }, { data: [200, 70, 100] }, { data: [344, 70, 560] }]}
                width={500}
                height={300}
                />

            <LineChart
            xAxis={[{ scaleType: 'band' , data: ["2023" , "2024" , "2025"] }]}
            series={[
                {
                data: [20000000 , 15000000 , 55315121],
                },
            ]}
            width={500}
            height={300}
            />
        </>
    )
}