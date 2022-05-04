import React, { useState } from 'react';
import { Button } from './Button';

interface GenresProps {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  handleClickButton:  (arg: number) => void
}
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}



export function SideBar(props: GenresProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>


      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>

  )
}