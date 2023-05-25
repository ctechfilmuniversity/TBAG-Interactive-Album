import React, { useEffect, useState } from 'react';
import { ParallelogramContainer, ArtworkInfo } from '.';
import { sketchInfo } from '../constants';
import styles from "../style";
import { useParams } from 'react-router-dom';

const AlbumDetailPage = ({ onSketchSelect, selectedSketch }) => {

    const { year } = useParams();
    const filteredSketches = sketchInfo.filter((sketch) => sketch.year === year);

    useEffect(() => {
        if (!selectedSketch || selectedSketch.year !== year) {
            const firstSketch = sketchInfo.find((sketch) => sketch.year === year);
            onSketchSelect(firstSketch);
        }
    }, [year, onSketchSelect, selectedSketch]);

    if (!selectedSketch) {
        return <div className={`${styles.paddingX} ${styles.flexCenter} text-white`}>No sketches found for the selected year.</div>;
    }

    return (
        <>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} upper-section`}>
                <ParallelogramContainer
                    items={filteredSketches}
                    onSketchSelect={ onSketchSelect }
                />
            </div>
            
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} bottom-section`}>
                <div className={`bg-primary ${styles.paddingX}`}>
                    <div className={`flex ${styles.boxWidth} sketch-container`}>
                        <div className={`video-container`}>
                            <video className={`w-full h-full`} src={selectedSketch.videoPath} loop controls autoPlay />
                        </div>
                        <div className={`px-4 artwork-description`}>
                            <ArtworkInfo
                                title={selectedSketch.title}
                                artist={selectedSketch.artist}
                                subtitle={selectedSketch.subtitle}
                                description={selectedSketch.short_description}
                                id={selectedSketch.id}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AlbumDetailPage;


