// Configuración para la API de Instagram
// Para usar con una cuenta real de Instagram, sigue estos pasos:

// 1. Ve a https://developers.facebook.com/
// 2. Crea una nueva aplicación
// 3. Configura Instagram Basic Display API
// 4. Obtén tu Access Token

export const INSTAGRAM_CONFIG = {
  // Reemplaza con tu Access Token real
  ACCESS_TOKEN: 'TU_ACCESS_TOKEN_AQUI',
  
  // URL base de la API de Instagram
  BASE_URL: 'https://graph.instagram.com/v12.0',
  
  // Campos que quieres obtener de cada post
  FIELDS: 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count,location',
  
  // Número de posts a mostrar
  POSTS_LIMIT: 6
};

// Función para obtener posts de Instagram
export const fetchInstagramPosts = async () => {
  try {
    const response = await fetch(
      `${INSTAGRAM_CONFIG.BASE_URL}/me/media?` +
      `access_token=${INSTAGRAM_CONFIG.ACCESS_TOKEN}&` +
      `fields=${INSTAGRAM_CONFIG.FIELDS}&` +
      `limit=${INSTAGRAM_CONFIG.POSTS_LIMIT}`
    );
    
    if (!response.ok) {
      throw new Error('Error al obtener datos de Instagram');
    }
    
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching Instagram posts:', error);
    throw error;
  }
};

// Función para formatear los datos de Instagram
export const formatInstagramPost = (post) => {
  return {
    id: post.id,
    image: post.media_type === 'VIDEO' ? post.thumbnail_url : post.media_url,
    caption: post.caption || '',
    likes: post.like_count || 0,
    comments: post.comments_count || 0,
    location: post.location?.name || '',
    username: '@tu_usuario', // Reemplaza con tu username
    timestamp: formatTimestamp(post.timestamp),
    permalink: post.permalink
  };
};

// Función para formatear timestamp
const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffInHours = Math.floor((now - date) / (1000 * 60 * 60));
  
  if (diffInHours < 1) return 'Ahora';
  if (diffInHours < 24) return `${diffInHours}h`;
  
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) return `${diffInDays}d`;
  
  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) return `${diffInWeeks}s`;
  
  const diffInMonths = Math.floor(diffInDays / 30);
  return `${diffInMonths}m`;
};

// INSTRUCCIONES PARA CONECTAR CON INSTAGRAM REAL:
/*
1. Ve a https://developers.facebook.com/
2. Crea una nueva aplicación
3. En la configuración de la app, agrega Instagram Basic Display
4. Configura los permisos necesarios:
   - instagram_basic
   - instagram_content_publish (si quieres publicar)
5. Obtén tu Access Token de larga duración
6. Reemplaza 'TU_ACCESS_TOKEN_AQUI' con tu token real
7. En InstagramFeed.js, descomenta las líneas de la API real y comenta los datos simulados

Ejemplo de uso en InstagramFeed.js:

import { fetchInstagramPosts, formatInstagramPost } from '../config/instagram';

// En el useEffect:
const loadInstagramData = async () => {
  try {
    setLoading(true);
    const posts = await fetchInstagramPosts();
    const formattedPosts = posts.map(formatInstagramPost);
    setInstagramPosts(formattedPosts);
    setLoading(false);
  } catch (err) {
    setError('Error al cargar el feed de Instagram');
    setLoading(false);
  }
};
*/
