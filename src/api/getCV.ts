export async function getCV() {
    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:P3ZKz3vC/cv_info');
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