

export const endDateMonth = (endDate: string) => {
  const formattedDate = endDate.split('T')[0];
  return formattedDate;
};

export function truncateAccessToken(accessToken: string): string {
  return `${accessToken.slice(0, 8)}...${accessToken.slice(-8)}`;
}




