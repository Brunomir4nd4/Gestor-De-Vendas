import * as React from "react";
import DialogoEdicaoVenda from '../DialogoEdicaoVenda/DialogoEdicaoVenda';
import "./Table.css";
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
  DeleteRegular,
} from "@fluentui/react-icons";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
  Button,
  useArrowNavigationGroup,
  useFocusableGroup,
} from "@fluentui/react-components";

const columns = [
  { columnKey: "nomeDoCliente", label: "Cliente" },
  { columnKey: "litragem", label: "Litragem" },
  { columnKey: "valor", label: "Valor Cobrado" },
  { columnKey: "data", label: "Data" },
  { label: "Ações" },
];

export default function({itens}) {
  const keyboardNavAttr = useArrowNavigationGroup({ axis: "grid" });
  const focusableGroupAttr = useFocusableGroup({
    tabBehavior: "limited-trap-focus",
  });

  return (
    <Table
      {...keyboardNavAttr}
      role="grid"
      aria-label="Table with grid keyboard navigation"
      id="table"
    >
      <TableHeader>
        <TableRow>
          {columns.map((column) => (
            <TableHeaderCell key={column.columnKey}>
              {column.label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {itens.map((item) => (
          <TableRow key={item.nomeDoCliente}>
            <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout>
                {item.nomeDoCliente}
              </TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout>
                {`${parseFloat(item.litragem).toFixed(2)} L`}
              </TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout >
                {`R$ ${parseFloat(item.valor).toFixed(2)}`}
              </TableCellLayout>
            </TableCell>
            <TableCell tabIndex={0} role="gridcell">
              <TableCellLayout>
                {item.data}
              </TableCellLayout>
            </TableCell>
            <TableCell role="gridcell" tabIndex={0} {...focusableGroupAttr}>
              <TableCellLayout>
                <Button 
                  icon={<EditRegular />} 
                  aria-label="Editar" 
                  className="edit-button"
                  onClick={() => DialogoEdicaoVenda} />
                <Button icon={<DeleteRegular />} aria-label="Delete" />
              </TableCellLayout>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};