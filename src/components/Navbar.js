function Navbar(){
    const links = [
        {
        url:"/",
        name :"Shop"

        },
        
    ];

    let menu = links.map(
        (path) => {
        return(
            <span>
                <a href={path.url}>{path.name}</a>&nbsp;
            </span>
        );
    });
    return(
        <div>
        {menu}
                </div>
   
    );
   }
   export default Navbar;
