function InformationRedis({ title, icon, style }: any) {
    return (
        <div className={style} style={{ borderRadius: '10px', display: 'flex', padding: '5px 10px', background: 'white', alignItems: 'center' }}>
            {icon}
            <p style={{padding:'0px 5px'}}>{title}</p>
        </div>
    )
}

export default InformationRedis