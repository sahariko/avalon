import * as React from 'react';
import { useSelector } from 'react-redux';
import classnames from 'classnames';
import * as events from '../../../../lib/events';
import { QuestOptions } from '../../../../lib/Game/constants';
import { send } from '../../../events';
import { showVoteModal } from '../../../store/domains/game/selectors';
import { getUsername } from '../../../store/domains/user/selectors';
import { Modal, Icon, Avatar } from '../../../components';
import thumbsUpIcon from '../../../assets/icons/thumbs-up.svg';
import { BASE_SELECTION_CLASSES } from './constants';
import './style.scss';
import { getSelectedPlayers } from '../../../store/domains/players/selectors';

const VoteModal = (): React.ReactElement => {
    const show = useSelector(showVoteModal);
    const selectedPlayers = useSelector(getSelectedPlayers);
    const username = useSelector(getUsername);
    const [selected, setSelected] = React.useState(null);

    console.log('selectedPlayers:', selectedPlayers);

    React.useEffect(() => {
        setSelected(null);
    }, [show]);

    if (!show) {
        return null;
    }

    const handleSuccess = () => {
        setSelected(QuestOptions.Success);
        send(events.Client.QuestSelected, {
            username,
            selected: QuestOptions.Success
        });
    };

    const handleFail = () => {
        setSelected(QuestOptions.Fail);
        send(events.Client.QuestSelected, {
            username,
            selected: QuestOptions.Fail
        });
    };

    const yesClasses = classnames(
        BASE_SELECTION_CLASSES,
        'selection-yes',
        {
            selected: selected === QuestOptions.Success
        }
    );

    const noClasses = classnames(
        BASE_SELECTION_CLASSES,
        'selection-no',
        {
            selected: selected === QuestOptions.Fail
        }
    );

    return (
        <Modal show={show} className="votes-modal">
            <div className="row">
                <div className="col-sm-12 flex-center">
                    <h2>האם אתה בעד ההרכב הזה למשימה?</h2>
                    <div className="selected-player-list flex-center">
                        {selectedPlayers.map(({ username, role }) => (
                            <Avatar key={username}
                                username={username}
                                role={role}/>
                        ))}
                    </div>
                </div>
                <div className={yesClasses}>
                    <Icon size={50}
                        onClick={handleSuccess}>
                        { thumbsUpIcon }
                    </Icon>
                    סבבה
                </div>
                <div className={noClasses}>
                    <Icon size={50}
                        onClick={handleFail}>
                        { thumbsUpIcon }
                    </Icon>
                    ממש לא
                </div>
            </div>
        </Modal>
    );
};

export default VoteModal;
