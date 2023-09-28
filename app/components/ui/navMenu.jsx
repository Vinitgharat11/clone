import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";


const MenuList = [
  { id: 1, name: "WorkSpace" },
  { id: 2, name: "Recent" },
  { id: 3, name: "Started" },
  { id: 4, name: "Templates" },
];


export default function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {MenuList.map((list) => (
          <NavigationMenuItem key={list.id}>
            <NavigationMenuTrigger>{list.name}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                fuga ipsa aut quisquam a modi provident rerum delectus vitae
                explicabo ipsam voluptas. Aliquam perferendis molestias officia
                voluptate quasi accusantium incidunt.
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
