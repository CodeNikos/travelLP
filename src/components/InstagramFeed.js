import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaHeart, FaComment, FaMapMarkerAlt } from 'react-icons/fa';


const InstagramFeed = () => {
  const [instagramPosts, setInstagramPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Datos simulados de Instagram (reemplazar con API real)
  const mockInstagramData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "✨ París, la ciudad del amor #paris #travel #france",
      likes: 1247,
      comments: 89,
      location: "París, Francia",
      username: "@traveldreams",
      timestamp: "2h"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "🌅 Amanecer en Tokio #tokyo #japan #sunrise",
      likes: 2156,
      comments: 156,
      location: "Tokio, Japón",
      username: "@traveldreams",
      timestamp: "5h"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "🌃 Nueva York nunca duerme #nyc #newyork #citylife",
      likes: 3421,
      comments: 234,
      location: "Nueva York, USA",
      username: "@traveldreams",
      timestamp: "1d"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "🏖️ Paraíso en Santorini #santorini #greece #paradise",
      likes: 1892,
      comments: 123,
      location: "Santorini, Grecia",
      username: "@traveldreams",
      timestamp: "2d"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "🏔️ Aventuras en los Alpes #switzerland #mountains #adventure",
      likes: 1567,
      comments: 98,
      location: "Zermatt, Suiza",
      username: "@traveldreams",
      timestamp: "3d"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      caption: "🌊 Costa Amalfitana #italy #amalfi #mediterranean",
      likes: 2789,
      comments: 187,
      location: "Amalfi, Italia",
      username: "@traveldreams",
      timestamp: "4d"
    }
  ];

  useEffect(() => {
    // Simular carga de datos de Instagram
    const loadInstagramData = async () => {
      try {
        setLoading(true);
        
        // Aquí puedes integrar con la API real de Instagram
        // const response = await axios.get('https://graph.instagram.com/me/media', {
        //   params: {
        //     access_token: 'TU_ACCESS_TOKEN',
        //     fields: 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count,location'
        //   }
        // });
        
        // Simular delay de carga
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setInstagramPosts(mockInstagramData);
        setLoading(false);
      } catch (err) {
        setError('Error al cargar el feed de Instagram');
        setLoading(false);
      }
    };

    loadInstagramData();
  }, []);

  const handleInstagramClick = (post) => {
    // Abrir post en Instagram (simulado)
    window.open(`https://instagram.com/p/${post.id}`, '_blank');
  };

  if (loading) {
    return (
      <div className="instagram-loading">
        <div className="loading-spinner"></div>
        <p>Cargando contenido de Instagram...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="instagram-error">
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <div className="instagram-feed">
      <div className="instagram-header">
        <FaInstagram className="instagram-icon" />
        <h3>@traveldreams en Instagram</h3>
        <p>Descubre destinos increíbles a través de nuestros ojos</p>
      </div>
      
      <div className="instagram-grid">
        {instagramPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="instagram-post"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => handleInstagramClick(post)}
          >
            <div className="post-image">
              <img src={post.image} alt={post.caption} />
              <div className="post-overlay">
                <div className="post-stats">
                  <span><FaHeart /> {post.likes}</span>
                  <span><FaComment /> {post.comments}</span>
                </div>
              </div>
            </div>
            
            <div className="post-content">
              <div className="post-header">
                <span className="username">{post.username}</span>
                <span className="timestamp">{post.timestamp}</span>
              </div>
              
              <p className="post-caption">{post.caption}</p>
              
              {post.location && (
                <div className="post-location">
                  <FaMapMarkerAlt />
                  <span>{post.location}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="instagram-cta">
        <button className="instagram-follow-btn">
          <FaInstagram />
          Seguir en Instagram
        </button>
      </div>
    </div>
  );
};

export default InstagramFeed;

