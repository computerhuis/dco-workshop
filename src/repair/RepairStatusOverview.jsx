import {useEffect, useRef, useState} from 'react';
import {Table} from '@mantine/core';
import {invoke} from "@tauri-apps/api/tauri";

export function RepairStatusOverview() {

  let repairs = [];
  const [repairsData, setRepairsData] = useState(repairs);
  const interval = useRef(null)

  useEffect(() => {
    // load repairs
    invoke('repairs').then(function (data) {
      setRepairsData(data);
    });

    // auto refresh repairs
    interval.current = setInterval(() => {
      invoke('repairs').then(function (data) {
        setRepairsData(data);
      });
    }, 5000);

    return () => clearInterval(interval.current)
  }, []);


  const rows = repairsData.map((repair) => {
    return (
      <Table.Tr key={repair.id}>
        <Table.Td>{repair.first_name} {repair.infix} {repair.last_name}</Table.Td>
        <Table.Td>{repair.computer_id}</Table.Td>
        <Table.Td>{repair.check_in_date}</Table.Td>
        <Table.Td>Todo</Table.Td>
        <Table.Td>{repair.manufacturer} / {repair.model}</Table.Td>
        <Table.Td>{repair.description}</Table.Td>
        <Table.Td>todo</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="xs">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Behandelaar</Table.Th>
            <Table.Th>Computer</Table.Th>
            <Table.Th>Inname</Table.Th>
            <Table.Th>Klant</Table.Th>
            <Table.Th>Merk/Type</Table.Th>
            <Table.Th>Probleem</Table.Th>
            <Table.Th>Contact</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
