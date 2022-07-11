const Card = props => {
    return (
		<div class="card shadow mb-4">
		    <div class="card-header py-3">
				<div class="row">
					<div class="col-12 col-sm-4">
						<h6 class="m-0 font-weight-bold text-primary">{props.title}</h6>
					</div>
				</div>
		    </div>
		    <div class="card-body">
				{props.children}
		    </div>
		</div>
	);
}

export default Card;