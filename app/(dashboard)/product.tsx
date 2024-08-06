import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { or } from 'drizzle-orm';
// import { SelectProduct } from '@/lib/db';
// import { deleteProduct } from './actions';

export function Product({order}:any) {
console.log(order)
  
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        {/* <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={order.imageUrl}
          width="64"
        /> */}
      </TableCell>
      <TableCell className="font-medium">{order.emailAddresse}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize">
          {order.status}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{`$${order.lastNameAddressee}`}</TableCell>
      <TableCell className="hidden md:table-cell">{order.emailAddresse}</TableCell>
      <TableCell className="hidden md:table-cell">
        {/* {product.availableAt.toLocaleDateString()} */}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>
              {/* <form action={deleteProduct}>
                <button type="submit">Delete</button>
              </form> */}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
