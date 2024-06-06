function TabRedisDetail({ tabParams, setSearchParams, title, title2 }: any) {
  return (
    <p
      className={tabParams === title ? "tab-redis" : ""}
      onClick={() => setSearchParams({ tab: title })}
      tabIndex={0}
    >
      {title2}
    </p>
  );
}

export default TabRedisDetail;
