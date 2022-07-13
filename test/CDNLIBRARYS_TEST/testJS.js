function impotrtedMethodForCreatingIframe(src, container, id) {
    let sp = document.createElement("iframe");
    sp.id = id;
    sp.src = src;
    sp.style.height = '100%';
    sp.style.width = '100%';
    sp.scrolling = 'no';
    sp.style.border = "none";
    sp.style.position = 'relative';
    sp.style.overflow = "hidden";
    container.appendChild(sp);
}
window.addEventListener('message', function(e) {
    if( typeof e.data === 'object' && e.data.name !== undefined ) {
        switch( e.data.name ) {
            case 'dynamic_height_sm':
                if(iframe_container) iframe_container.style.height = e.data.value + 'px';
            break;
        }
    }
});