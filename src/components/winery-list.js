import React, {useState} from "react"
import PropTypes from "prop-types"

import "./winery-list.css"

const ALL = `All regions`;

const mapUrl = ({lat, lng}) => `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`;

const displayUrl = url => url.replace(/^https?:\/\/(www\.)?/, ``).replace(/\/$/, ``);

const WineryCard = ({winery}) => (
    <li className="winery">
        <h4 className="winery-name">{winery.name}</h4>
        <p className="winery-meta">
            {winery.city}
            {winery.founded && <> · since {winery.founded}</>}
            {winery.contract && <> · contract winery</>}
        </p>
        <dl>
            <dt>Address</dt>
            <dd>
                <a href={mapUrl(winery)} target="_blank" rel="noopener noreferrer">{winery.address}<span className="visually-hidden"> (opens in new tab)</span></a>
            </dd>
            {winery.tasting && (
                <>
                    <dt>Tasting room</dt>
                    <dd>{winery.tasting}</dd>
                </>
            )}
            {winery.website && (
                <>
                    <dt>Web</dt>
                    <dd>
                        <a href={winery.website} target="_blank" rel="noopener noreferrer">
                            {displayUrl(winery.website)}
                            <span className="visually-hidden"> (opens in new tab)</span>
                        </a>
                    </dd>
                </>
            )}
        </dl>
    </li>
);

const WineryList = ({wineries}) => {
    const [region, setRegion] = useState(ALL);
    const regions = [...new Set(wineries.map(b => b.region))].sort();
    const shown = regions.filter(r => region === ALL || r === region);
    const shownCount = wineries.filter(b => shown.includes(b.region)).length;

    return (
        <section aria-label="Winery list">
            <p className="visually-hidden" role="status">
                {shownCount} wineries shown{region === ALL ? `` : ` in ${region}`}
            </p>
            <div className="region-filter" role="group" aria-label="Filter by region">
                {[ALL, ...regions].map(r => (
                    <button key={r} type="button" aria-pressed={r === region} onClick={() => setRegion(r)}>
                        {r}
                    </button>
                ))}
            </div>
            {shown.map(r => {
                const inRegion = wineries.filter(b => b.region === r);
                return (
                    <div key={r}>
                        <h3 className="region-title">
                            {r} <span className="region-count">{inRegion.length} wineries</span>
                        </h3>
                        <ul className="winery-grid">
                            {inRegion.map(b => <WineryCard key={b.id} winery={b}/>)}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
};

WineryList.propTypes = {
    wineries: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WineryList
