SELECT title, duration filmProd_name, rating, country_name, director_name, producer_name, lang_name from Documentary d
    left join FilmProductionCompany f on d.filmProd_id=f.id
        left join Rating r on d.rating_id=r.id
            left join Country c on d.country_id=c.id
                left join Director dr on d.director_id=dr.id
                    left join Producer p on d.producer_id=p.id
                        left join Language l on d.lang_id=l.id;