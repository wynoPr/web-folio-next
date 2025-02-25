export async function getData() {
    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:P3ZKz3vC/work');
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
  
      const data = await response.json();
  
      // Filtra y ordena los datos
      const sortedData = data
      .filter((item: { show: boolean }) => item.show === true)
        .sort((a: { date: string }, b: { date: string }) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
      return sortedData;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  }

  export async function getOneData(id: string) {
    try {
      const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:P3ZKz3vC/work/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos');
      }
  
      const data = await response.json();
  
      return data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      throw error;
    }
  }